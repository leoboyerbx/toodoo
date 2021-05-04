export default async function (avatarName) {
    const avatar = await import(`./${avatarName}.json`)
    if (!avatar) return null
    return avatar.default
}

