import {bootstrap}    from 'angular2/platform/browser'
import {FlugSuchenComponent} from './flug-suchen-component'
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/add/operator/map';


bootstrap(FlugSuchenComponent, HTTP_PROVIDERS);

