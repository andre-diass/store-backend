import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ProductController } from '../../services/product.controller';
import buildResponse from '../../utils/buildResponse';
import { ClientErrorCodes, SuccessfullCodes } from '../../utils/statusCode';

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const productId = _event.queryStringParameters?.productId;
  const product = new ProductController();

  try {
    const result = await product.getProduct(productId);

    const response = buildResponse.buildSuccessfullResponse(SuccessfullCodes.OK, result);
    return response;
  } catch (error) {
    const failedResponse = buildResponse.buildErrorResponse(ClientErrorCodes.BadRequest, error);
    return failedResponse;
  }
};
