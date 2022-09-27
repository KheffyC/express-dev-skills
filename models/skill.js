const skills = [
    {id: 1, skill: 'Data Structures and Algorithms', complete: true},
    {id: 2, skill: 'Javascript (ES6)', complete: true},
    {id: 3, skill: 'React.js', complete: true},
    {id: 4, skill: 'Django', complete: false},
    {id: 5, skill: 'MongoDB', complete: false},
]

module.exports = {
    getAll,
    getOne,
}

function getAll(){
    return skills
}

function getOne(id){
   id = parseInt(id)

   return skills.find(skill => skill.id === id);
}