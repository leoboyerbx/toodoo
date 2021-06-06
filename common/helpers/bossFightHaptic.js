import haptic from "./haptic";

class BossFightHaptic {
  /**
   *
   * @param gameContext GameContext
   */
  contextUpdated(gameContext) {
    const capabilityTarget =
      gameContext.bossAttack?.capabilityResult.capability.target;
    console.log(capabilityTarget);
    if (capabilityTarget && capabilityTarget.toLowerCase().includes("player")) {
      this.playerHurt();
    }
  }

  playerHurt() {
    haptic.vibrate([
      100,
      50,
      100,
      50,
      100,
      50,
      100,
      50,
      100,
      50,
      100,
      50,
      100,
      50,
      100,
    ]);
  }
}

export default new BossFightHaptic();
