
import { solve, SolveResponse, SolveRequestOptions, SolveRequest, openai } from '../solve/solve';

describe('invalid format request', () => {

  it('shoud return zero error with invalid input request', async () => {
    // Mock invalid input
    const request = 456;

    // Call the solve function
    const response: SolveResponse = await solve(request as any);

    // Assertions
    expect(response).toHaveProperty('status');
    expect(response).toHaveProperty('data');
    expect(response.status).toBe(0);
    expect(response.data).toBe('{"error": "Invalid request format", "text": "void" }');
  },40000)

});

describe('Bad Request', () => {

  it('shoud bad request from openai', async () => {
    // Mock invalid input
    const request: SolveRequest = 'Hello world!';
    const options: SolveRequestOptions = {
      max_tokens: 5000
    }

    // Call the solve function
    const response: SolveResponse = await solve(request,options);

    // Assertions
    expect(response).toHaveProperty('status');
    expect(response).toHaveProperty('data');
    expect(response.status).toBe(400);
    expect(response.data).toContain('OpenAI API Error');
  },10000)

});

describe('max retries', () => {
  // Mock OpenAI API response
  const mockGPTError = { 
    response: {
      statusText: 'Bad Request',
      status: 429,
      data: { error: {message: 'Error Message'} }
    }
  };

  beforeEach(() => {
    // Mock OpenAI API call
    jest.spyOn(openai,'createChatCompletion').mockRejectedValue(mockGPTError as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should make the maximum number of retries and return the correct response', async () => {
    // Set up input request and options
    const request: SolveRequest = 'Input request';
    const options: SolveRequestOptions = {
      max_retries: 3,
      initial_delay: 1,
      delay_exponential: 2
    };

    // Call the solve function
    const response: SolveResponse = await solve(request, options);

    // Check that the OpenAI API was called the maximum number of times
    expect(openai.createChatCompletion).toHaveBeenCalledTimes(4);

    // Check that the response contains the correct data
    expect(response.status).toEqual(429);
    expect(response.data).toEqual('{"error": "MAX RETRIES REACHED", "text": "Exponential fail with inital delay: 1, max reties: 3 and delay exponential: 2" }');
  });
});
