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
    create,
    deleteOne,
    update,
}

function getAll(){
    return skills
}

function getOne(id){
   id = parseInt(id)

   return skills.find(skill => skill.id === id);
}

function create(skill){
    skill.id = Date.now() % 100000
    skill.complete = false
    skills.push(skill)
}

function deleteOne(id){
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function update(id, skill){
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skill.id = parseInt(id)
    skills.splice(idx, 1, skill)
}