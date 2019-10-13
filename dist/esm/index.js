import './chunk-40949afc.js';
import './chunk-bfad5a4b.js';
import { s as setOptions, c as config } from './chunk-9d997597.js';
import './chunk-c2e281b8.js';
import './chunk-e3ad3b14.js';
import { a as registerComponentProgrammatic, u as use } from './chunk-cca88db8.js';
import './chunk-5884814a.js';
import './chunk-b80c4ecd.js';
import Plugin from './autocomplete.js';
export { default as Autocomplete } from './autocomplete.js';
import Plugin$1 from './button.js';
export { default as Button } from './button.js';
import './chunk-6e198005.js';
import Plugin$2 from './checkbox.js';
export { default as Checkbox } from './checkbox.js';
import Plugin$4 from './collapse.js';
export { default as Collapse } from './collapse.js';
import './chunk-1ce918da.js';
import './chunk-dc5f834f.js';
import './chunk-61b1e08b.js';
import './chunk-09e9651b.js';
import Plugin$3 from './clockpicker.js';
export { default as Clockpicker } from './clockpicker.js';
import './chunk-559aa131.js';
import Plugin$5 from './datepicker.js';
export { default as Datepicker } from './datepicker.js';
import 'vue';
import './chunk-0eabd53c.js';
import Plugin$6 from './dialog.js';
export { default as Dialog, DialogProgrammatic } from './dialog.js';
import Plugin$7 from './dropdown.js';
export { default as Dropdown } from './dropdown.js';
import Plugin$8 from './field.js';
export { default as Field } from './field.js';
import Plugin$9 from './icon.js';
export { default as Icon } from './icon.js';
import Plugin$a from './input.js';
export { default as Input } from './input.js';
import './chunk-b9bdb0e4.js';
import Plugin$b from './loading.js';
export { default as Loading, LoadingProgrammatic } from './loading.js';
import Plugin$c from './menu.js';
export { default as Menu } from './menu.js';
import './chunk-f0786270.js';
import Plugin$d from './message.js';
export { default as Message } from './message.js';
import Plugin$e from './modal.js';
export { default as Modal, ModalProgrammatic } from './modal.js';
import Plugin$g from './notification.js';
export { default as Notification, NotificationProgrammatic } from './notification.js';
import './chunk-0bf6dc9c.js';
import Plugin$f from './navbar.js';
export { default as Navbar } from './navbar.js';
import Plugin$h from './numberinput.js';
export { default as Numberinput } from './numberinput.js';
import './chunk-56546480.js';
import Plugin$i from './pagination.js';
export { default as Pagination } from './pagination.js';
import Plugin$j from './progress.js';
export { default as Progress } from './progress.js';
import Plugin$k from './radio.js';
export { default as Radio } from './radio.js';
import Plugin$l from './rate.js';
export { default as Rate } from './rate.js';
import Plugin$m from './select.js';
export { default as Select } from './select.js';
import './chunk-4b99852f.js';
import Plugin$n from './slider.js';
export { default as Slider } from './slider.js';
import Plugin$o from './snackbar.js';
export { default as Snackbar, SnackbarProgrammatic } from './snackbar.js';
import './chunk-0e3f4fb5.js';
import Plugin$p from './steps.js';
export { default as Steps } from './steps.js';
import Plugin$q from './switch.js';
export { default as Switch } from './switch.js';
import Plugin$r from './table.js';
export { default as Table } from './table.js';
import Plugin$s from './tabs.js';
export { default as Tabs } from './tabs.js';
import './chunk-8ef95879.js';
import Plugin$t from './tag.js';
export { default as Tag } from './tag.js';
import Plugin$u from './taginput.js';
export { default as Taginput } from './taginput.js';
import Plugin$v from './timepicker.js';
export { default as Timepicker } from './timepicker.js';
import Plugin$w from './toast.js';
export { default as Toast, ToastProgrammatic } from './toast.js';
import Plugin$x from './tooltip.js';
export { default as Tooltip } from './tooltip.js';
import Plugin$y from './upload.js';
export { default as Upload } from './upload.js';



var components = /*#__PURE__*/Object.freeze({
    Autocomplete: Plugin,
    Button: Plugin$1,
    Checkbox: Plugin$2,
    Clockpicker: Plugin$3,
    Collapse: Plugin$4,
    Datepicker: Plugin$5,
    Dialog: Plugin$6,
    Dropdown: Plugin$7,
    Field: Plugin$8,
    Icon: Plugin$9,
    Input: Plugin$a,
    Loading: Plugin$b,
    Menu: Plugin$c,
    Message: Plugin$d,
    Modal: Plugin$e,
    Navbar: Plugin$f,
    Notification: Plugin$g,
    Numberinput: Plugin$h,
    Pagination: Plugin$i,
    Progress: Plugin$j,
    Radio: Plugin$k,
    Rate: Plugin$l,
    Select: Plugin$m,
    Slider: Plugin$n,
    Snackbar: Plugin$o,
    Steps: Plugin$p,
    Switch: Plugin$q,
    Table: Plugin$r,
    Tabs: Plugin$s,
    Tag: Plugin$t,
    Taginput: Plugin$u,
    Timepicker: Plugin$v,
    Toast: Plugin$w,
    Tooltip: Plugin$x,
    Upload: Plugin$y
});

var Buefy = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // Options
    setOptions(Object.assign(config, options)); // Components


    for (var componentKey in components) {
      Vue.use(components[componentKey]);
    } // Config component


    var BuefyProgrammatic = {
      setOptions: function setOptions$1(options) {
        setOptions(Object.assign(config, options));
      }
    };
    registerComponentProgrammatic(Vue, 'config', BuefyProgrammatic);
  }
};
use(Buefy);

export default Buefy;
