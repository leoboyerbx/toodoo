import capabilitiesAnimations from "../entities/capabilitiesAnimations.json";

export default function getCapabilityAnimation(
  effect,
  target,
  numberOfPlayers
) {
  const segment = capabilitiesAnimations.segments[effect]?.[target];
  if (segment) {
    if (Array.isArray(segment)) {
      return segment;
    } else {
      return segment[numberOfPlayers + "players"] ?? false;
    }
  }
  return false;
}
