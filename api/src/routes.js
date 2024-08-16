const express = require('express');
const router = express.Router();

let issues = require('./issues.json');

// Create Issue
router.post('/issues', (req, res) => {
    const newIssue = req.body;
    issues.push(newIssue);
    console.log('Created Issue:', newIssue);
    res.status(201).send(newIssue);
});

// Read Issues
router.get('/issues', (req, res) => {
    res.json(issues);
});

// Update Issue
router.put('/issues/:id', (req, res) => {
    const { id } = req.params;
    const updatedIssue = req.body;
    issues = issues.map(issue => issue.id === id ? updatedIssue : issue);
    console.log('Updated Issue:', updatedIssue);
    res.send(updatedIssue);
});

// Delete Issue
router.delete('/issues/:id', (req, res) => {
    const { id } = req.params;
    issues = issues.filter(issue => issue.id !== id);
    console.log('Deleted Issue ID:', id);
    res.sendStatus(204);
});

module.exports = router;