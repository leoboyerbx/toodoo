import Entity from "../entities/Entity";
import Capability from "./Capability";

/**
 * Interface representing the result of the usage of a capability
 */
export interface CapabilityUsageResult {
  capability: Capability;
  effectiveTarget: Entity;
  targetPreviousState: Entity;
}
