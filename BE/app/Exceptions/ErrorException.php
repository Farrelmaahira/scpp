<?php

namespace App\Exceptions;

use Exception;
use Symfony\Component\ErrorHandler\ThrowableUtils;

class ErrorException extends Exception
{
    public $statusCode;
    public $type;
    public function __construct($type = 'string' ,$message, $statusCode, Exception $previous = NULL)
    {
        parent::__construct($message, $statusCode, $previous);
        $this->statusCode = $statusCode;
        $this->type = $type;
    }

}
