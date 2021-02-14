/**
 * Basic Configuration
 */
class Config{
    /**
     * Get api address
     */
    static getUrl()
    {
        return 'http://127.0.0.1:8000/api';
    }
    /**
     * Get server base address
     */
    static getBase()
    {
        return 'http://127.0.0.1:8000';
    }
}

export default Config;