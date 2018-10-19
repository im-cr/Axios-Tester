const data = [
{
    id: 1,
    name: "Lebron James",
    team: "lakers",
    position: "forward",
    draft: 2003,
},
{
    id: 2,
    name: "Steph Curry",
    team: "Golden State",
    position: "guard",
    draft: 2008

},
{
    id: 3,
    name: "James Harden",
    team: "rockets",
    position: 'guard',
    draft: 1996,
},
{
    id: 4,
    name: "John Starks",
    team: "knicks",
    position: "guard",
    draft: 1988
},
{
    id:5,
    name: "magic johnson",
    team: "lakers",
    position: "guard",
    draft: 1978
}];

module.exports = {
    all() {
        return data;
    },
    getById(id) {
        if (id < 0 || id > data.length) {
            return null;
        }

        return data[id - 1];
    },
    find(query) {
        let keys = Object.keys(query);

        return data.filter((player) => {
            return keys.every((key) => {
                // if the guitar doesn't have the provided property
                // we don't have a match
                if (!player[key]) {
                    return false;
                }

                if (typeof player[key] === 'string') {
                    return player[key].toLowerCase() == query[key].toLowerCase(); 
                }

                return player[key] == query[key]; 
            });
        });
    }
}