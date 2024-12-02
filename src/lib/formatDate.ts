export function formatDate(date: Date){
    const months = [
        "ene",
        "feb",
        "mar",
        "abr",
        "may",
        "jun",
        "jul",
        "ago",
        "sep",
        "oct",
        "nov",
        "dic",
    ]

    const day = date.getDay();
    const month = months[date.getMonth()]
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`
}