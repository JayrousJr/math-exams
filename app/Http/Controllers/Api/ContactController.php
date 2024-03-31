<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactCreateRequest;
use App\Http\Requests\ContactUpdateRequest;
use App\Http\Resources\ContactCollection;
use App\Http\Resources\ContactResource;
use App\Mail\ConfirmationEmail;
use App\Mail\ResponseEmail;
use App\Models\Contacts;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return (new ContactCollection(Contacts::paginate(10)));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContactCreateRequest $request)
    {
        $data = $request->validated();
        $message = Contacts::create($data);
        $mailto = 'info@legolas.tech';
        $input = new Contacts();
        $input->name = $data['name'];
        $input->email = $data['email'];
        $input->message = $data['message'];

        // Mail::to($mailto)->send(new ConfirmationEmail($message));
        // Mail::to($mailto)->send(new ResponseEmail($message));
        return response(new ContactResource($message), 201);
        // 201 -> Content has been created
    }

    /**
     * Display the specified resource.
     */
    public function show(Contacts $contacts)
    {
        return (new ContactResource($contacts))
            ->response()
            ->setStatusCode(200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ContactUpdateRequest $request, Contacts $contacts)
    {
        $this->validate($request, [
            'email' => ['email', 'required', 'max:250'],
            'message' => ['string', 'required', 'min:5', 'max:2000'],
            'name' => ['string', 'require', 'min:3', 'max:255']
        ]);
        $contacts->update([
            'name' => $request->input('name'),
            'message' => $request->input('message'),
            'email' => $request->input('email')
        ]);
        return (new ContactResource($contacts))
            ->response()
            ->setStatusCode(200);
        // 200 -> Everything is oky
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contacts $contacts)
    {
        $contacts->delete();

        return response()->json(null, 204);
        // 204 -> No content Reurned
    }
}