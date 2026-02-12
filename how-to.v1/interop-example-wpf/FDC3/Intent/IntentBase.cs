using interop_intents_v1.FDC3.Context;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace interop_intents_v1.FDC3.Intent
{
    public class IntentBase<T> : Openfin.Desktop.InteropAPI.Intent where T : ContextBase, new()
    {
        public IntentBase()
        {
            Context = new T();
        }

        [JsonProperty("name")]
        public new virtual string Name { get; set; }

        [JsonProperty("context")]
        public new virtual T Context { get; set; }
    }
}
