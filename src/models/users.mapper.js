// We need to map network object to view model, so we don' expose API specific in UI
export default mapper = (json) => {
    const {first=undefined, last=undefined} = (json.name || {});
    const {thumbnail=undefined, large=undefined} = (json.picture || {});
    return {
        firstName : first,
        lastName: last,
        displayName: (first&&last)?`${first} ${last}`:first?first:last?last:undefined,
        email: json.email,
        thumbnail,
        photo: large
    }
}