#!/usr/bin/php-cgi
<?php

$file = fopen("outputfile.txt", "w");
$headers = getallheaders();

foreach ($headers as $header => $value) {
	fwrite($file, $header);
	fwrite($file, ": ");
	fwrite($file, $value);
	fwrite($file, "\n");
}

fwrite($file, "\n");

foreach ($_POST as $key => $value) {
	fwrite($file, $key);
	fwrite($file, " - ");
	fwrite($file, $value);
	fwrite($file, "\n");
}

