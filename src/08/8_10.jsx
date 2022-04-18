// component create cycle
// (component create)
// constructor
// getDerivedStateFromProps
// render
// componentDidMount
// (create complete)
// ================================
// setState()의 경우
// (create complete)
// getDerivedStateFromProps
// shouldComponentUpdate
// -> true라면
//  render
//  getSnapshotBeforeUpdate
//  componentDidUpdate
//  (update complete)
// -> false라면
//  (update complete)
// ================================
// forceUpdate()의 경우
// render
// getShapshotBeforeUpdate
// componentDidUpdate
// (update complete)
