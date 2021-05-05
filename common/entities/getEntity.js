export default async function getEntity (name, entityType) {
    const dir = entityType === 'boss' ? 'boss' : 'avatars'
    const avatar = await import(`./${dir}/${name}.js`)
    if (!avatar) return null
    return avatar.default
}
export async function getAvatar(avatarName) {
    return await getEntity(avatarName, 'avatar')
}
export async function getBoss(bossName) {
    return await getEntity(bossName, 'boss')
}

