import { FsApiResponseHandler } from '@firestitch/api';
import { FsMessage } from '@firestitch/message';


export class ResponseHandler extends FsApiResponseHandler {
  public constructor(private fsMessage: FsMessage) {
    super();
  }

  public success(event, config) {
    super.success(event, config);

    this.fsMessage.success('Success', event);
  }

  public error(err, config) {
    this.fsMessage.error(err.statusText);
    console.log('Error', event);
  }

  public complete(config) {
    this.fsMessage.info('Complete');
  }
}
