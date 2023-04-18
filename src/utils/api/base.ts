// function will return the domain based on if a variable is existing
export default function getBase() {
    return (process.env.NEXT_PUBLIC_URL ?? "https://gitlog.ai")
}