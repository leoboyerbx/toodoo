export default class Common {
  static commonDir = "../../../common";

  static async getEntity(name, entityType) {
    const dir = entityType === "boss" ? "boss" : "avatars";
    const avatar = await import(`${this.commonDir}/entities/${dir}/${name}`);
    if (!avatar) return null;
    return avatar.default;
  }
  static async getAvatar(avatarName) {
    return await this.getEntity(avatarName, "avatar");
  }
  static async getBossForWeek(week) {
    return await this.getEntity(`boss-${week + 1}`, "boss");
  }
}
