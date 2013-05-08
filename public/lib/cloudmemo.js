/**
 * Author: DolphinBoy
 * Email: dolphinboyo@gmail.com
 * Date: 13-5-8
 * Time: 下午6:30
 * Description: Kiss组件-标签
 */

function CloudMemo(container, config) {
  var self = this;

  if (!(self instanceof CloudMemo)) {
    return new CloudMemo(container, config);
  }

  /**
   * 容器元素
   * @type {Element}
   */
  self.container = container = S.one(container);
  if (!container) return;

  CloudMemo.superclass.constructor.call(self, config);

  self._init();

}

S.extend(CloudMemo, S.Base);

CloudMemo.ATTRS = {

}
