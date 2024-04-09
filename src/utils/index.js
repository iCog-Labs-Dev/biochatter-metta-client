export function dateFormatter(n) {
    if (n) {
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium',
        }).format(new Date(n))
    } else {
        return 'N/A'
    }
}