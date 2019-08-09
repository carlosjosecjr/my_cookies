const get_value_cookie = (field) => {
    return document.cookie
            .split(';')
            .map(
                (item) => {
                let l = item.split('=')
                return {field: l[0], value: l[1] }
            })
            .filter(
                (item) => {
                    return item.field === field
            })[0].value
}
