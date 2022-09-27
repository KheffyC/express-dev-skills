const Skill = require('../models/skill')

module.exports = {
    index,
    show,
}

function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'Developer Skills'
    })
}

function show(req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Developer Skill'
    })
}