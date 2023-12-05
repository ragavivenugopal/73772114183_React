pipeline {
  agent any
 
  stages {
    stage('Deploy to GitHub Pages') {
      steps {
        script {
          // Deploy to GitHub Pages
          sh 'npm run deploy'
        }
      }
    }
  }
}
