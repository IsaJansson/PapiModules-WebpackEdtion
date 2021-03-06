$.support.cors = true;

import 'jsrender';

import '../settings.js';
import './translations/texts.js';
import './_common.js';
import "./_format-helpers.js";

window.Popper = require('popper.js').default; // pay attention to "default"

import "bootstrap/js/dist/button";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/tooltip";
import "bootstrap/js/dist/util";
import '../bootstrap-datepicker.js';

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faCalendarAlt, faCalendarPlus, faDownload, faPrint, faImage, faFilePdf, faFileExcel,faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck, faCalendarAlt, faCalendarPlus, faDownload, faPrint, faImage, faFilePdf, faFileExcel,faCaretLeft, faCaretRight);
dom.watch();

