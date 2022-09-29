const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteOne,
    edit,
    update,
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

function newSkill(req, res){
    res.render('skills/new', {
        title: "New Skill"
    })
}

function create(req, res){
    Skill.create(req.body)
    res.redirect('/skills')
}

function deleteOne(req, res){
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res){
    res.render('skills/edit', {
        title: 'Edit Skill',
        skill: Skill.getOne(req.params.id)
    })
}

function update(req, res){
    req.body.complete = req.body.complete === 'on'
    Skill.update(req.params.id, req.body);
    res.redirect('/skills')
}