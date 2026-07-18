import type {
  Adjacency,
  Project,
  ReviewNote,
  Room,
  Zone,
} from "@/types/domain";

export type WorkspaceSchemaVersion = 1;

export type WorkspaceState = {
  schemaVersion: WorkspaceSchemaVersion;
  project: Project;
  rooms: Room[];
  adjacencies: Adjacency[];
  zones: Zone[];
  reviewNotes: ReviewNote[];
  aiAssumptions: string[];
  specialConsiderations: string[];
};

export function createEmptyWorkspaceState(project: Project): WorkspaceState {
  return {
    schemaVersion: 1,
    project,
    rooms: [],
    adjacencies: [],
    zones: [],
    reviewNotes: [],
    aiAssumptions: [],
    specialConsiderations: [],
  };
}
