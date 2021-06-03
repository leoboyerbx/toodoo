import playersCapabilities from "../data/playersCapabilities.json";
import Capability from "../realtime-game/capabilities/Capability";

/**
 * Utility class to access common code contents
 */
export default class Common {
  static commonDir = "../../../common";

  /**
   * Get data about an entity
   * @param name
   * @param entityType
   */
  static async getEntity(name: string, entityType: string) {
    const dir = entityType === "boss" ? "boss" : "avatars";
    const avatar = await import(`${this.commonDir}/entities/${dir}/${name}`);
    if (!avatar) return null;
    return avatar.default;
  }
  /**
   * Get all capabilities
   */
  static getPlayersCapabilities(): Array<Capability> {
    return playersCapabilities?.map((capability) => {
      return new Capability(capability);
    });
  }

  /**
   * Get data about an avatar
   * @param avatarName
   */
  static async getAvatar(avatarName: string) {
    return await this.getEntity(avatarName, "avatar");
  }

  /**
   * Get data about the boss of a specified week
   * @param week
   */
  static async getBossForWeek(week: number) {
    return await this.getEntity(`boss-${week + 1}`, "boss");
  }
}
