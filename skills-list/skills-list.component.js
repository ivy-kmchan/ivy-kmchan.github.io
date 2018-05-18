'use strict';

// Register `skillsList` component, along with its associated controller and template
angular.
  module('skillsList').
  component('skillsList', {
    templateUrl: 'skills-list/skills-list.template.html',
    controller: function skillsListController() {
      this.skills = [
        {
          name: 'Databases/SQL:',
          snippet: 'Oracle, SQLite, MS Access, MySQL',
          age: 1
        }, {
          name: 'NoSQL DB:',
          snippet: 'MongoDB, BerkeleyDB',
          age: 2
        }, {
          name: 'ETL Tools:',
          snippet: 'Informatica PowerMart/PowerCenter, Business Objects',
          age: 3
        }, {
          name: 'Python:',
          snippet: 'Pandas, Numpy',
          age: 4
        }, {
          name: 'Data Models:',
          snippet: 'ER Modeling, Semi-Structured Data Modeling',
          age: 5
        }, {
          name: 'Big Data:',
          snippet: 'Hadoop MapReduce',
          age: 6
        }, {
          name: 'WebDev Technologies & Frameworks:',
          snippet: 'HTML, CSS, JavaScript, jQuery, jCanvas, jQuery Mobile, jQueryUI, Foundation6, HTTP, AngularJS',
          age: 7
        }, {
          name: 'Content Management Systems (CMS):',
          snippet: 'Joomla, WordPress, Drupal8',
          age: 8
        }, {
          name: 'Responsive Web& Mobile Design (RWD):',
          snippet: 'Responsive Design & Typography, Media-queries, Grid-base Layouts, Image Resize',
          age: 9
        }, {
          name: 'CSS Preprocessors/Tools:',
          snippet: 'Sass, Koala, Compass',
          age: 10
        }, {
          name: 'CSS Layouts:',
          snippet: 'Flexbox, CSS4 Grids, CSS Animation & SVG',
          age: 11
        }, {
          name: 'Languages:',
          snippet: 'HTML, CSS, JavaScript, SQL, PL/SQL, XML, JSON, XQuery, PHP, Python, pandas, Java, VBA',
          age: 12
        }, {
          name: 'Reporting Tools:',
          snippet: 'Business Objects, Tableau',
          age: 13
        }, {
          name: 'Version Control Systems:',
          snippet: 'Git',
          age: 14
        }, {
          name: 'DevOps:',
          snippet: 'AWS, Agile, Scrum and Kanban frameworks',
          age: 15
        }
      ];

      this.orderProp = 'age';
    }
  });