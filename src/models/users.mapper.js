// We need to map network object to view model, so we don' expose API specific in UI
export default mapper = (json) => {
    const {first='', last=''} = json.name;
    return {
        firstName : first,
        lastName: last,
        displayName: `${first} ${last}`,
        email: json.email,
        thumbnail: json.picture.thumbnail,
        photo: json.picture.large
    }
}