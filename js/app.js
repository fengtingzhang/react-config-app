var React = require('react/addons');
var axios = require('axios');

var WithoutLink = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    axios({
      method: 'get',
      url: 'http://localhost:8080/search',
      withCredentials: true
    })
    // axios.get('http://localhost:8080/search')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });

    return {
      message: 'JAVA_HOME',
      java_home: 'H:/JDK8'
    };
  },
  render: function() {
    var valueLink = this.linkState('message');
    var javaHomeLink = this.linkState('java_home');
    var handleChange = function(e) {
      valueLink.requestChange(e.target.value);
    };

    var handleJavaHomeChange = function(e) {
      javaHomeLink.requestChange(e.target.value);
    };

    return <div>
        <input type="text" value={valueLink.value} onChange={handleChange} />
        <input type="text" value={valueLink.value} onChange={handleChange} />
        <input type="text" value={valueLink.value} onChange={handleChange} />
        <input type="text" value={javaHomeLink.value} onChange={handleJavaHomeChange} />
    </div>;
   }
});
 
// Render the config view
React.render(
  <WithoutLink />,
  document.getElementById("container")
);
