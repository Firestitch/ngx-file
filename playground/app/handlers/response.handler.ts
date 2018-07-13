import { FsApiResponseHandler } from '@firestitch/api';

export class ResponseHandler extends FsApiResponseHandler {
  constructor() {
    super();
  }

  public success(event, config) {
    super.success(event, config);

    console.log('Success', event);
  }

  public error(err, config) {
    alert(err.statusText);
    console.log('Error', event);
  }

  public complete(config) {
    console.log('Complete');
  }
}
