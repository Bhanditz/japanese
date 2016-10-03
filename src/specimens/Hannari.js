import React from 'react'
import FitText from 'react-fittext'

class SpecimenHannari extends React.Component {
  render () {
    return (
      <div className="bg-fallback-red bg-gradient-transparent-white-transparent white overflow-y-hidden">
        <div className="p2 py4">
        <div className="mx-auto max-width-4">
          <div className="col-12">
            <div className="h0-hannari wf-hannari center mx-auto vertical upright"
                 style={{ minHeight: 100 + 'vh' }}>
              <div>あかるく、</div>
              <div>やさしく、</div>
              <div>ふんわり。</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

SpecimenHannari.defaultProps = {

}

export default SpecimenHannari
