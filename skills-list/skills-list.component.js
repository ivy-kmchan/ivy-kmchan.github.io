'use strict';

// Register `skillsList` component, along with its associated controller and template
angular.
  module('skillsList').
  component('skillsList', {
    templateUrl: 'skills-list/skills-list.template.html',
    controller: function skillsListController() {
      this.skills = [
        {
          name: 'Data Science & AI:',
          snippet: 'LangChain, LLM, Prompt Engineering, Vertex AI, AutoML, Scikit-learn, Keras, TensorFlow, PyTorch',
          age: 1
        }, {
          name: 'Data Analysis & Visualization:',
          snippet: 'Pandas, NumPy, SciPy, Matplotlib, Seaborn, Power BI, Tableau, Excel Power Query, Excel Power Pivot',
          age: 2
        }, {
          name: 'Databases:',
          snippet: 'Postgres, Oracle, MySQL, SQLite, MongoDB, BerkeleyDB, GraphQL',
          age: 3
        }, {
          name: 'Data Engineering:',
          snippet: 'ETL, Informatica PowerMart/PowerCenter, Data Modeling, ER Modeling, Hadoop MapReduce',
          age: 4
        }, {
          name: 'Programming Languages:',
          snippet: 'Python, R, JavaScript, Java, PHP, VBA',
          age: 5
        }, {
          name: 'Query Languages:',
          snippet: 'SQL, PL/SQL, GraphQL, XQuery',
          age: 6
        }, {
          name: 'Frontend Development:',
          snippet: 'HTML, CSS, JavaScript, AngularJS, jQuery, Foundation6',
          age: 7
        }, {
          name: 'CSS & Design:',
          snippet: 'Sass, Flexbox, CSS Grid, CSS Animation, SVG, Responsive Design, Media Queries',
          age: 8
        }, {
          name: 'Content Management:',
          snippet: 'WordPress, Drupal8, Joomla',
          age: 9
        }, {
          name: 'Cloud & DevOps:',
          snippet: 'AWS, Git, Agile, Scrum, Kanban',
          age: 10
        }, {
          name: 'Data Formats:',
          snippet: 'JSON, XML, Semi-Structured Data, CSV',
          age: 11
        }, {
          name: 'Business Intelligence:',
          snippet: 'OBIEE, Oracle BI Publisher, SAP Business Objects',
          age: 12
        }
      ];

      this.orderProp = 'age';
    }
  });