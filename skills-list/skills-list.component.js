'use strict';

// Register `skillsList` component, along with its associated controller and template
angular.
  module('skillsList').
  component('skillsList', {
    templateUrl: 'skills-list/skills-list.template.html',
    controller: function skillsListController() {
      this.skills = [
        {
          name: 'Frontend Technologies & Frameworks:',
          snippet: 'HTML, CSS, JavaScript, jQuery, jCanvas, jQuery Mobile, jQuery UI, Foundation6, HTTP, AngularJS',
          age: 1
        }, {
          name: 'Content Management Systems (CMS):',
          snippet: 'Joomla, WordPress, Drupal8',
          age: 2
        }, {
          name: 'Responsive & Mobile Design (RWD):',
          snippet: 'Responsive Design & Typography, Media-queries, Grid-base Layouts, Image Resize',
          age: 3
        }, {
          name: 'CSS Preprocessors/Tools:',
          snippet: 'Sass, Koala, Compass',
          age: 4
        }, {
          name: 'CSS Layouts:',
          snippet: 'Flexbox, CSS4 Grids, CSS Animation & SVG',
          age: 5
        }, {
          name: 'Databases/SQL:',
          snippet: 'Oracle, SQLite, MS Access',
          age: 6
        }, {
          name: 'NoSQL DB:',
          snippet: 'MongoDB, BerkeleyDB',
          age: 7
        }, {
          name: 'Languages:',
          snippet: 'HTML, CSS, JavaScript, SQL, PL/SQL, XML, JSON, XQuery, PHP, Python, Java, VBA',
          age: 8
        }, {
          name: 'Data Models:',
          snippet: 'ER Modeling, Semi-Structured Data Modeling',
          age: 9
        }, {
          name: 'Reporting Tools:',
          snippet: 'Business Objects',
          age: 10
        }, {
          name: 'ETL Tools:',
          snippet: 'Informatica PowerMart/PowerCenter, Business Objects',
          age: 11
        }, {
          name: 'Version Control Systems:',
          snippet: 'Git',
          age: 12
        }, {
          name: 'DevOps:',
          snippet: 'AWS, Agile, Scrum and Kanban frameworks',
          age: 13
        }
      ];

      this.orderProp = 'age';
    }
  });