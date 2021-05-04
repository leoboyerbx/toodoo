export default async function (avatarName) {
    const avatar = await import(`./${avatarName}.js`)
    if (!avatar) return null
    return avatar.default
}

