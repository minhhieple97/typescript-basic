export const dateStringToDate = (dateString: string): Date => {
    const dateParts = dateString.split('/').map((el: string): number => {
        return parseInt(el)
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}