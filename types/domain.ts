export type RoomPriority = "low" | "medium" | "high";

export type AdjacencyStrength = "avoid" | "low" | "medium" | "high";

export type ReviewSeverity = "info" | "warning" | "critical";

export type Project = {
  id: string;
  name: string;
  brief: string;
  buildingType?: string;
  createdAt: string;
  updatedAt: string;
};

export type Room = {
  id: string;
  projectId: string;
  name: string;
  quantity: number;
  areaPerUnitSqm: number;
  department: string;
  priority: RoomPriority;
  zoneId?: string;
  levelId?: string;
  notes?: string;
};

export type Adjacency = {
  id: string;
  projectId: string;
  fromRoomId: string;
  toRoomId: string;
  strength: AdjacencyStrength;
  reason: string;
};

export type Zone = {
  id: string;
  projectId: string;
  name: string;
  description: string;
};

export type ReviewNote = {
  id: string;
  projectId: string;
  severity: ReviewSeverity;
  message: string;
  relatedRoomIds?: string[];
};
