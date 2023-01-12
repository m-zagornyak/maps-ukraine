import { Component } from 'react';
import * as am5 from '@amcharts/amcharts5';

class ComponentWithAm5Root extends Component {
  private root?: am5.Root;

  setRoot(root: am5.Root) {
      this.root = root;
  }

  disposeRoot() {
      if (this.root) {
          this.root.dispose();
      }
  }
}

export default ComponentWithAm5Root;