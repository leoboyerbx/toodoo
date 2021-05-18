import { CapabilityUsageResult } from "./CapabilityUsageResult";

/**
 * Interface representing the result of a bpss attack
 */
export default interface BossAttackResult {
  message: string;
  capabilityResult: CapabilityUsageResult;
}
