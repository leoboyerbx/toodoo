import Entity from "../entities/Entity";
import Capability from "./Capability";

export interface CapabilityUsageResult {
  capability: Capability;
  effectiveTarget: Entity;
  targetPreviousState: Entity;
}
