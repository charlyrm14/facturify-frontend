export const formattedTimeAndDate = (isoDate: string = '2025-05-14 00:00'): string => {

    const date = new Date(isoDate);

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};