import moment from 'moment';
export const formatFecha:string = "DD/MM/YYYY HH:mm:ss";


export function getStrFecha({ date = new Date() }: { date: string | Date }): string {
    let newDate: string = "";
    if (typeof date === "string") {
        newDate = moment(date, formatFecha).utc().utcOffset("-04:00").format(formatFecha);
    }
    if (date instanceof Date) {
        newDate = moment(date).utc().utcOffset("-04:00").format(formatFecha);
    }
    return newDate;
}

export function getFecha( date : Date | string): Date {
    let newDate: Date = new Date();
    if (typeof date === "string") {
        newDate = moment(date, formatFecha).utc().utcOffset("-04:00").toDate();
    }
    if (date instanceof Date) {
        newDate = moment(date).utc().utcOffset("-04:00").toDate();
    }
    return newDate;
}