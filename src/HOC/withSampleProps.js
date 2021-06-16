import React, { useState, useEffect } from "react";

// const withSampleProps = (Component) => (props) => {
//   const [data, setData] = useState();
//   useEffect(() => {
//     setData([{ id: 1, name: "jon doe" }]);
//   }, []);
//   return <Component data={data} {...props} />;
// };

function withSampleProps(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {
            id: 1,
            name: "jon doe",
          },
        ],
      };
    }
    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

export default withSampleProps;
