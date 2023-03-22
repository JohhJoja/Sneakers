export const valid = (obj, type) => {
    let text = obj.parentElement.lastElementChild;
    if (type == 'name') {
        if (obj.value.length < 2) {
            text.style.display = 'block'
        } else {
            text.style.display = 'none'
            return obj.value
        }
    }
    if (type == 'tel') {
        if (!obj.value.startsWith('+')) {
            text.style.display = 'block'
        } else {
            text.style.display = 'none'
            return obj.value
        }
    }
    if (type == 'mail') {
        let text = obj.parentElement.lastElementChild;
        if (obj.value.includes('@') && obj.value.includes('.')) {
            text.style.display = 'none'
            return obj.value
        } else {
            text.style.display = 'block'
        }
    }
    if (type == 'password') {
        if (obj.value.length < 5) {
            text.style.display = 'block'
        } else {
            text.style.display = 'none'
            return obj.value
        }
    }

    /////////////////////////////

    if (type == 'number') {
        if (obj.value.length != 16 || isNaN(obj.value)) {
            text.style.display = 'block'
        } else {
            text.style.display = 'none'
            return obj.value
        }
    }
    if (type == 'cvv') {
        if (obj.value.length != 3 || isNaN(obj.value)) {
            text.style.display = 'block'
        } else {
            text.style.display = 'none'
            return obj.value
        }
    }
    if (type == 'date') {
        if (isNaN(obj.value[0] + obj.value[1] + obj.value[3] + obj.value[4]) || obj.value[2] != '/') {
            text.style.display = 'block'
        } else {
            text.style.display = 'none'
            return obj.value
        }
    }
}