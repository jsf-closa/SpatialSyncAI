"use client";

import {
  createContext,
  type Dispatch,
  type ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";

import type {
  Adjacency,
  Project,
  ReviewNote,
  Room,
  Zone,
} from "@/types/domain";
import type { WorkspaceState } from "@/types/workspace";

export type WorkspaceAction =
  | {
      type: "project/update";
      payload: Partial<Omit<Project, "id" | "createdAt">>;
    }
  | {
      type: "room/add";
      payload: Room;
    }
  | {
      type: "room/update";
      payload: {
        roomId: string;
        changes: Partial<Omit<Room, "id" | "projectId">>;
      };
    }
  | {
      type: "room/remove";
      payload: {
        roomId: string;
      };
    }
  | {
      type: "adjacency/add";
      payload: Adjacency;
    }
  | {
      type: "adjacency/update";
      payload: {
        adjacencyId: string;
        changes: Partial<Omit<Adjacency, "id" | "projectId">>;
      };
    }
  | {
      type: "adjacency/remove";
      payload: {
        adjacencyId: string;
      };
    }
  | {
      type: "zone/add";
      payload: Zone;
    }
  | {
      type: "zone/update";
      payload: {
        zoneId: string;
        changes: Partial<Omit<Zone, "id" | "projectId">>;
      };
    }
  | {
      type: "zone/remove";
      payload: {
        zoneId: string;
      };
    }
  | {
      type: "review-note/add";
      payload: ReviewNote;
    }
  | {
      type: "review-note/update";
      payload: {
        reviewNoteId: string;
        changes: Partial<Omit<ReviewNote, "id" | "projectId">>;
      };
    }
  | {
      type: "review-note/remove";
      payload: {
        reviewNoteId: string;
      };
    }
  | {
      type: "ai-assumptions/replace";
      payload: string[];
    }
  | {
      type: "special-considerations/replace";
      payload: string[];
    }
  | {
      type: "workspace/replace";
      payload: WorkspaceState;
    };

export function workspaceReducer(
  state: WorkspaceState,
  action: WorkspaceAction,
): WorkspaceState {
  switch (action.type) {
    case "project/update":
      return {
        ...state,
        project: {
          ...state.project,
          ...action.payload,
          updatedAt: new Date().toISOString(),
        },
      };

    case "room/add":
      return {
        ...state,
        rooms: [...state.rooms, action.payload],
      };

    case "room/update":
      return {
        ...state,
        rooms: state.rooms.map((room) =>
          room.id === action.payload.roomId
            ? {
                ...room,
                ...action.payload.changes,
              }
            : room,
        ),
      };

    case "room/remove": {
      const { roomId } = action.payload;

      return {
        ...state,
        rooms: state.rooms.filter((room) => room.id !== roomId),

        adjacencies: state.adjacencies.filter(
          (adjacency) =>
            adjacency.fromRoomId !== roomId && adjacency.toRoomId !== roomId,
        ),

        reviewNotes: state.reviewNotes.map((reviewNote) => ({
          ...reviewNote,
          relatedRoomIds: reviewNote.relatedRoomIds?.filter(
            (relatedRoomId) => relatedRoomId !== roomId,
          ),
        })),
      };
    }

    case "adjacency/add":
      return {
        ...state,
        adjacencies: [...state.adjacencies, action.payload],
      };

    case "adjacency/update":
      return {
        ...state,
        adjacencies: state.adjacencies.map((adjacency) =>
          adjacency.id === action.payload.adjacencyId
            ? {
                ...adjacency,
                ...action.payload.changes,
              }
            : adjacency,
        ),
      };

    case "adjacency/remove":
      return {
        ...state,
        adjacencies: state.adjacencies.filter(
          (adjacency) => adjacency.id !== action.payload.adjacencyId,
        ),
      };

    case "zone/add":
      return {
        ...state,
        zones: [...state.zones, action.payload],
      };

    case "zone/update":
      return {
        ...state,
        zones: state.zones.map((zone) =>
          zone.id === action.payload.zoneId
            ? {
                ...zone,
                ...action.payload.changes,
              }
            : zone,
        ),
      };

    case "zone/remove": {
      const { zoneId } = action.payload;

      return {
        ...state,
        zones: state.zones.filter((zone) => zone.id !== zoneId),

        rooms: state.rooms.map((room) =>
          room.zoneId === zoneId
            ? {
                ...room,
                zoneId: undefined,
              }
            : room,
        ),
      };
    }

    case "review-note/add":
      return {
        ...state,
        reviewNotes: [...state.reviewNotes, action.payload],
      };

    case "review-note/update":
      return {
        ...state,
        reviewNotes: state.reviewNotes.map((reviewNote) =>
          reviewNote.id === action.payload.reviewNoteId
            ? {
                ...reviewNote,
                ...action.payload.changes,
              }
            : reviewNote,
        ),
      };

    case "review-note/remove":
      return {
        ...state,
        reviewNotes: state.reviewNotes.filter(
          (reviewNote) => reviewNote.id !== action.payload.reviewNoteId,
        ),
      };

    case "ai-assumptions/replace":
      return {
        ...state,
        aiAssumptions: [...action.payload],
      };

    case "special-considerations/replace":
      return {
        ...state,
        specialConsiderations: [...action.payload],
      };

    case "workspace/replace":
      return action.payload;

    default:
      return state;
  }
}

type WorkspaceContextValue = {
  state: WorkspaceState;
  dispatch: Dispatch<WorkspaceAction>;
};

const WorkspaceContext = createContext<WorkspaceContextValue | null>(null);

type WorkspaceProviderProps = {
  initialState: WorkspaceState;
  children: ReactNode;
};

export function WorkspaceProvider({
  initialState,
  children,
}: WorkspaceProviderProps) {
  const [state, dispatch] = useReducer(workspaceReducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);

  if (!context) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider.");
  }

  return context;
}

export function useWorkspaceProject() {
  return useWorkspace().state.project;
}

export function useWorkspaceRooms() {
  return useWorkspace().state.rooms;
}

export function useWorkspaceAdjacencies() {
  return useWorkspace().state.adjacencies;
}

export function useWorkspaceZones() {
  return useWorkspace().state.zones;
}

export function useWorkspaceReviewNotes() {
  return useWorkspace().state.reviewNotes;
}

export function useWorkspaceDispatch() {
  return useWorkspace().dispatch;
}
