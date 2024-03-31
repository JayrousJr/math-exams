<x-mail::message>


Hello dear {{$name}}
your message is {{$text}}
thanksyou
<x-mail::button :url="''">
Button Text
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
