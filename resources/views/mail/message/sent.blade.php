<x-mail::message>
# Introduction

Hello dear {{$message }}
This is a sent email to Legolas Technologies 

Meet our developers 

<x-mail::button :url="''">
Button Text
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
