var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

function byteString(num) {
    var index = 0
    while (num > 1024) {

        if (index === 8) {
            return num.toFixed(2) + ' ' + units[8];
        }

        num = num / 1024;
        index++;
    }

    return num.toFixed(2) + ' ' + units[index];
}